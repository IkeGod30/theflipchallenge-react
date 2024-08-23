import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../features/iframeSrc/auth-slice";
import { AuthApi } from "../../../../api/auth";

function DeleteAccount() {
  const deleteAc = () => {};

  return (
    <div>
      <ul>
        <li className="nav-item">
          <a onClick={deleteAc} className="nav-link">
            Delete Account
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DeleteAccount;
