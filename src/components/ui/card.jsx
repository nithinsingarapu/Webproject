import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return <div className={`border-b pb-2 mb-2 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return <div className={`border-t pt-2 mt-2 ${className}`}>{children}</div>;
};
