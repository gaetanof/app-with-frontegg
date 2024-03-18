//HOSTED

import './App.css';
import { useEffect, useState } from 'react';
import {
  useAuth,
  useAuthActions,
  useLoginWithRedirect,
  ContextHolder,
  AdminPortal,
} from '@frontegg/react';

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();
  const [selectedTenantId, setSelectedTenantId] = useState('');

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      // Establece el tenantId inicial como el tenant activo actual del usuario
      setSelectedTenantId(user?.tenantId);
    }
  }, [isAuthenticated, loginWithRedirect, user?.tenantId]);
  console.log(loginWithRedirect);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  const handleClick = () => {
    console.log(AdminPortal);
    AdminPortal.show();
  };

  const handleSwitchTenant = (e) => {
    const newTenantId = e.target.value;
    switchTenant({ tenantId: newTenantId });
    setSelectedTenantId(newTenantId); // Actualiza el estado con el nuevo tenantId seleccionado
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
            <span>Logged in as: {user?.name}</span>
            <button onClick={logout}>Click to logout</button>
            <button onClick={handleClick}>Settings</button>
          </div>
          {user?.tenantIds && (
            <select value={selectedTenantId} onChange={handleSwitchTenant}>
              {user.tenantIds.map((tenantId) => (
                <option key={tenantId} value={tenantId}>
                  Tenant ID: {tenantId}
                </option>
              ))}
            </select>
          )}
        </>
      ) : (
        <button onClick={loginWithRedirect}>Click me to login</button>
      )}
    </div>
  );
}
export default App;

//EMBEDDED

// import React from 'react';
// import { useAuthUser, useTenantsState, useAuthActions } from '@frontegg/react';

// function App() {
//   const { user, isAuthenticated } = useAuth(); // Use this to avoid redirect to /account/login

//   return (
//     <div className="App">
//       {isAuthenticated ? (
//         <>
//           <div>
//             <img src={user?.profilePictureUrl} alt={user?.name} />
//             <span>Logged in as: {user?.name}</span>
//             <button onClick={logout}>Click to logout</button>
//             <button onClick={handleClick}>Settings</button>
//           </div>
//           {user?.tenantIds && (
//             <select value={selectedTenantId} onChange={handleSwitchTenant}>
//               {user.tenantIds.map((tenantId) => (
//                 <option key={tenantId} value={tenantId}>
//                   Tenant ID: {tenantId}
//                 </option>
//               ))}
//             </select>
//           )}
//         </>
//       ) : (
//         <button onClick={loginWithRedirect}>Click me to login</button>
//       )}
//     </div>
//   );
// }

// export default App;
