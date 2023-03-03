import classes from "./IPhoneStorageElement.module.css";

const StorageElement = (props) => {
  return (
    <div
      className={`${classes.container} ${
        props.isSelected ? classes.selected : ""
      }`}
      onClick={props.onClick}
    >
      <h4>
        {props.storage.storage.memory} {props.storage.storage.unit}
      </h4>
      <p>{props.storage.pricing}</p>
    </div>
  );
};

export default StorageElement;
