import { Navigate } from 'react-router-dom';
import * as authService from '../../services/auth-services'
import { RoleEnum } from '../../models/auth';

type Props = {
   children: JSX.Element;
   roles?: RoleEnum[];
}

//coloca um componete filho dentro d um componente
export function PrivateRoute({ children, roles = [] }: Props) {
   //faça os testes para ver qual a autenticado do cliente 
   if (!authService.isAuthenticated()) {
      return <Navigate to="/login" />;
   }
   if (!authService.hasAnyRoles(roles)) {
      return <Navigate to="/" />;
   }
   return children;
}