import { useState } from "react";
import BASE_URL from "../../../../utility-functions/config";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function TableRow4({
  srNum,
  id,
  image,
  carouselImages,
  title,
  titleSub,
  description,
  descriptionSub,
  single,
  handleEdit,
  handleDelete,
  section,
  editValues,
  three,
  action,
}) {
  const [open, setOpen] = useState(false);
  const [open2nd, setOpen2nd] = useState(false);
  const handleEditClick = (e) => {
    editValues({
      title,
      description,
      id,
      image,
      carouselImages,
      titleSub,
      descriptionSub,
    });
    handleEdit(e, { image, title, description });
  };
  return (
    <tr className="table-row" data={id} data-section={section}>
      <td>{srNum}</td>
      <td>
        <div className="cms-img">
          <LazyLoadImage
            src={BASE_URL + "/" + image}
            style={{
              height: "100px",
              width: "180px",
              border: "1px solid #000",
              borderRadius: "10px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => setOpen(true)}
          />
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: BASE_URL + "/" + image }]}
          />
        </div>
      </td>
      <td>
        <div className="cms-img">
          <LazyLoadImage
            src={BASE_URL + "/" + carouselImages[0]}
            style={{
              height: "100px",
              width: "180px",
              border: "1px solid #000",
              borderRadius: "10px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => setOpen2nd(true)}
          />
          <Lightbox
            open={open2nd}
            close={() => setOpen2nd(false)}
            slides={carouselImages?.map((img) => {
              return { src: BASE_URL + "/" + img };
            })}
          />
        </div>
      </td>
      <td>
        <span>{titleSub}</span>
        {titleSub && (
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip>{title}</Tooltip>}
          >
            <i className="fa fa-question-circle ms-2"></i>
          </OverlayTrigger>
        )}
      </td>
      {!single && (
        <td>
          <span>{descriptionSub}</span>
          {descriptionSub && (
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip>{description}</Tooltip>}
            >
              <i className="fa fa-question-circle ms-2"></i>
            </OverlayTrigger>
          )}
        </td>
      )}
      {action && (
        <td>
          <div className="cms-action-btns">
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={handleEditClick}
            >
              <i className="fa fa-pen"></i> Edit
            </button>
            <button className="btn btn-sm btn-danger" onClick={handleDelete}>
              <i className="fa fa-trash"></i> Delete
            </button>
          </div>
        </td>
      )}
    </tr>
  );
}

export default TableRow4;
