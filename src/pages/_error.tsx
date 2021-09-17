import { NextPageContext } from "next";

type Status = {
  statusCode: string;
};

function Error({ statusCode }: Status) {
  return (
    <div className="containerCenter">
      <h2>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h2>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
