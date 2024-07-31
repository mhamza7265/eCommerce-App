import TableRow4 from "./TableRow4";

function CMSTable4({
  data,
  section,
  handleEditClick,
  handleDeleteClick,
  single,
  editValues,
  three,
  action,
}) {
  console.log("data", data);
  return (
    <table
      style={{
        backgroundColor: "white",
        width: "90%",
        margin: "20px auto 0 auto",
      }}
      className="cms-table"
    >
      <thead>
        <tr>
          <th>Sr. No#</th>
          <th>Image</th>
          <th>Carousel Images</th>
          <th>Title</th>
          {!single && <th>Description</th>}
        </tr>
      </thead>
      <tbody>
        {data?.map((data, i) => (
          <TableRow4
            key={i}
            id={data._id}
            srNum={i + 1}
            image={data.image}
            carouselImages={data.carouselImages}
            title={data.title}
            titleSub={data.titleSub}
            description={data.description}
            descriptionSub={data.descriptionSub}
            single={single}
            handleEdit={handleEditClick}
            handleDelete={handleDeleteClick}
            section={section}
            editValues={editValues}
            three={three}
            action={action}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CMSTable4;
