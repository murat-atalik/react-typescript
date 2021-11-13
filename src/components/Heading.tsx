type HeadingProps = {
  children: String;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};
