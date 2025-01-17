import "./SomaniJi.css";
import statue from "../../assets/somanyji.png";

const SomaniJi = () => {
  return (
    <div className="statue-container">
      <div className="statue-card">
        <div className="face face1">
          <div className="statue-content">
            <img src={statue} alt="statue"></img>
          </div>
        </div>
        <div className="face face2">
          <div className="statue-content">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
              repudiandae, explicabo voluptate et hic cum ratione a. Officia
              delectus illum perferendis maiores quia molestias vitae fugiat
              aspernatur alias corporis?
            </p>
            <a href="#" type="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomaniJi;
