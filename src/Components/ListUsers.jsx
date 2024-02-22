import React, { memo } from "react";

const ListUsers = ({ users }) => {
  return (
    <>
      <h4>Users:</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5>{user.username}</h5>
            <h6 style={{ marginTop: "-22px", fontWeight: "normal" }}>
              {user.nickname}
            </h6>
          </div>
        );
      })}
    </>
  );
};

export default memo(ListUsers);
