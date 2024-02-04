import React from "react";

export const Column = ({ headName, ListData, onClickList }) => {
  return (
    <>
      <div className="column">
        <h2>{headName}</h2>
        <ul key={0}>
          {ListData.length > 0 ? (
            <>
              {ListData.map((objList, index) => (
                <>
                  <li key={index} onClick={() => onClickList(objList, index)}>
                    {objList.name}
                  </li>
                </>
              ))}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};
Column.defaultProps = {
  headName: "",
  ListData: [],
  onClickList: () => {},
};
