// eslint-disable-next-line react/prop-types
function Button({ text, link }) {
  return (
    <a
      href={link}
      className={`bg-primary px-12 py-4 text-white text-xl hover:bg-darkSecondary transition rounded-lg`}
    >
      {text}
    </a>
  );
}

export default Button;
