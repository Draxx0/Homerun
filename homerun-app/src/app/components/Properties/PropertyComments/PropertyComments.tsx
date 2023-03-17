import { IComment, IProperty } from "../../../../api/utils/utils";
import { useContext, useEffect, useState } from "react";
import star from "../../../assets/icons/star.svg";
import PropertyServices from "../../../../api/services/properties.service";
import logo from "../../../assets/logos/Logo-xl.svg";
import { UserContext } from "../../../contexts/UserContext";

const PropertyComments = ({ property }: { property: IProperty }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const { user } = useContext(UserContext);

  const getComments = async () => {
    if (property) {
      try {
        const response = await PropertyServices.getComments(property._id);
        setComments(
          response.slice(response.length - 3, response.length).reverse()
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (property) {
      getComments();
    }
  }, [property]);

  useEffect(() => {
    if (comments) console.log(comments);
  }, [comments]);
  return (
    <div className="comments">
      {comments.map((comment: IComment) => (
        <div className="comment" key={comment._id}>
          <img src={logo} alt="homerun" className="comment__logo" />
          <div className="row alignCenter gap-2">
            <img
              src={comment.user.avatar}
              alt="avatar"
              className="comment__user-avatar"
            />
            <span className="bold">{user?._id === comment.user._id ? "Vous" : comment.user.firstName + " " + comment.user.lastName}</span>
            <span className="bold">-</span>
            <div className="row alignCenter gap-1">
              <span className="bold colored">{comment.stars}</span>
              <img src={star} alt="star" className="star" />
            </div>
          </div>
          <p className="comment__text">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyComments;
