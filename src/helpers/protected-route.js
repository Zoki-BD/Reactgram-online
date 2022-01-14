import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {

   //console.log({ ...rest })
   return (
      <Route
         {...rest} //with ...rest we get every other info from route that is protected (here we don't need to) 
         render={({ location }) => {
            //if is logged in user return 
            if (user) {
               return React.cloneElement(children, { user });
            }

            if (!user) {
               return (
                  <Redirect
                     to={{
                        pathname: ROUTES.LOGIN,
                        state: { from: location }
                     }}
                  />
               );
            }

            return null;
         }}
      />
   );
}

ProtectedRoute.propTypes = {
   user: PropTypes.object,
   children: PropTypes.object.isRequired
};
