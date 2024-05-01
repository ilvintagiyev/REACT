import styles from "./main.module.scss";
const Main = () => {
  return (
    <div className={styles.main}>
      <div className={"container ${}" + " " + styles.container}>
        <div className={styles.left}>
          <h3>30% off</h3>
          <h1>HandBag Product</h1>
          <p>
            It is a long established fect that a reader will be distracted by
            the readable content expound the actual teachings of the great
            explorer
          </p>
          <button>Shop now</button>
        </div>
        <div className={styles.right}>
          <img
            src="../../public/image/main-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
