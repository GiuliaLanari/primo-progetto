const ButtonComponent = function (props) {
  return (
    <div>
      <button className={props.class}>{props.testoButton}</button>
    </div>
  );
};

export default ButtonComponent;
