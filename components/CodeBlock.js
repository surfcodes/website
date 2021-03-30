import Highlight, { defaultProps } from "prism-react-renderer";

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, "");

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + " font-firacode"}
          style={{ ...style, padding: "1.2rem", borderRadius: "5px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
