import { getFormatedDate } from "@/store/library/utils";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const TeamModal = (props) => {
  console.log("Team ", props);
  return (
    <>
      {props?.toggle && (
        <div
          className="modal fade show "
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-scrollable modal-lg modal-sm model ">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5"></h1>
              </div>
              <div className="modal-body customBody">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Preview</th>
                      <th>Name</th>
                      <th>Title</th>
                      <th>OverView</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.meetExeutive?.length
                      ? props.meetExeutive.map((item, index) => {
                          if (item.active == "1") {
                            return (
                              <tr key={item?.id + index}>
                                <td>{index + 1}</td>
                                <td>
                                  <img
                                    className="listImgPreview"
                                    src={process.env.SITE_URL + item.media}
                                  ></img>
                                </td>
                                <td>{item?.column_1} </td>
                                <td>{item?.column_2}</td>
                                <td>{item?.description}</td>
                              </tr>
                            );
                          }
                        })
                      : ""}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={props.closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {props?.toggle && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default TeamModal;
