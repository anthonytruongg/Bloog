import React from "react";

type TitleProps = {
  title: string;
};

function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold font-circular text-white p-4">
        {props.title}
      </h1>
    </div>
  );
}

export default Title;
