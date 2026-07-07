import React from "react";

const docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <div>Docs home page</div>;
};

export default docs;
