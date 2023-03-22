import {
  IComment,
  ICommentCredentials,
  IProperty,
} from "../../../../api/utils/utils";
import { useContext, useEffect, useState } from "react";
import star from "../../../assets/icons/star.svg";
import PropertyServices from "../../../../api/services/properties.service";
import logo from "../../../assets/logos/Logo-xl.svg";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const PropertyComments = ({ property }: { property: IProperty }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [commentsCredentials, setCommentsCredentials] =
    useState<ICommentCredentials>({
      content: "",
      stars: 0,
    });
  const [isAboutToComment, setIsAboutToComment] = useState<boolean>(false);
  const [hoveredStars, setHoveredStars] = useState<number>(0);
  const starsArr: number[] = [1, 2, 3, 4, 5];
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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

  const handleToggleAboutToComment = () => {
    if (user) {
      setIsAboutToComment(true);
    } else {
      navigate("/auth/signin");
    }
  };

  const handleHoverStar = (index: number) => {
    setHoveredStars(index + 1);
  };

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const newComment = await PropertyServices.addComment(
        property._id,
        commentsCredentials
      );
      comments.splice(0, 0, newComment);
      if(comments.length > 3) comments.pop();
      setComments([...comments]);
      setCommentsCredentials({
        content: "",
        stars: 0,
      });
      setIsAboutToComment(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (property) {
      getComments();
    }
  }, [property]);

  useEffect(() => {
    if (commentsCredentials) console.log(commentsCredentials);
  }, [commentsCredentials]);
  return (
    <>
      <div className="comments">
        {comments.length > 0 ? (
          comments.map((comment: IComment) => (
            <div className="comment" key={comment._id}>
              <img src={logo} alt="homerun" className="comment__logo" />
              <div className="row alignCenter gap-2">
                <img
                  src={comment.user.avatar}
                  alt="avatar"
                  className="comment__user-avatar"
                />
                <span className="bold">
                  {user?._id === comment.user._id
                    ? "Vous"
                    : comment.user.firstName + " " + comment.user.lastName}
                </span>
                <span className="bold">-</span>
                <div className="row alignCenter gap-1">
                  <span className="bold colored">{comment.stars}</span>
                  <img src={star} alt="star" className="star" />
                </div>
              </div>
              <p className="comment__text">{comment.content}</p>
            </div>
          ))
        ) : (
          <span>
            Aucun commentaire pour le moment. Soyez le premier à en laisser un !
          </span>
        )}
      </div>

      <div className="add-comment">
        {!isAboutToComment && (
          <button className="button" onClick={handleToggleAboutToComment}>
            Ajouter un commentaire
          </button>
        )}

        {isAboutToComment && (
          <form className="comment-form" onSubmit={handleSubmitComment}>
            <div className="form-group">
              <label htmlFor="stars">Note</label>
              <div className="row alignCenter gap-1">
                {starsArr.map((starItem: number, index: number) => (
                  <img
                    src={star}
                    alt="star"
                    className={hoveredStars > index ? "fill-star" : "void-star"}
                    key={starItem}
                    onMouseEnter={() => handleHoverStar(index)}
                    onClick={() =>
                      setCommentsCredentials({
                        ...commentsCredentials,
                        stars: starItem,
                      })
                    }
                  />
                ))}
              </div>
              <small className="row alignCenter gap-1">
                Votre note : {commentsCredentials.stars}{" "}
                <img src={star} alt="" className="star" />
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="content">Votre commentaire</label>
              <textarea
                name="content"
                id="content"
                cols={30}
                rows={10}
                onChange={(e) =>
                  setCommentsCredentials({
                    ...commentsCredentials,
                    content: e.target.value,
                  })
                }
              ></textarea>
            </div>

            <button className="button-border" type="submit">
              Ajouter mon commentaire
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default PropertyComments;
