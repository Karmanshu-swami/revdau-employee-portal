import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import classNames from "classnames";
import PageTitle from '../../components/PageTitle';
import FileUploader from '../../components/FileUploader';

interface FileType extends File {
  preview?: string;
  formattedSize?: string;
}

interface FileUploaderProps {
  onFileUpload?: (files: FileType[]) => void;
  showPreview?: boolean;
}

const UploadDocuments = (props: FileUploaderProps) => {
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);

  /**
   * Handled the accepted files and shows the preview
   */
  const handleAcceptedFiles = (files: FileType[]) => {
    var allFiles = files;

    if (props.showPreview) {
      (files || []).map((file) =>
        Object.assign(file, {
          preview:
            file["type"].split("/")[0] === "image"
              ? URL.createObjectURL(file)
              : null,
          formattedSize: formatBytes(file.size),
        })
      );
      allFiles = [...selectedFiles];
      allFiles.push(...files);
      setSelectedFiles(allFiles);
    }

    if (props.onFileUpload) props.onFileUpload(allFiles);
  };

  /**
   * Formats the size
   */
  const formatBytes = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  /*
   * Removes the selected file
   */
  const removeFile = (e: any, fileIndex: number) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(fileIndex, 1);
    setSelectedFiles(newFiles);
    if (props.onFileUpload) props.onFileUpload(newFiles);
  };

  return (
    <>
     <Row>
          <Col>
            <div className="page-title-box">
              <h4 className="page-title mt-0 mb-1">
              Files Upload
              </h4>
            </div>
          </Col>
        </Row>


<Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <p className="sub-header">
                                Upload the files with drag’n’drop option along with image
                                previews.
                            </p>

                            <FileUploader
                                onFileUpload={(files) => {
                                    console.log('Uploaded files - ', files);
                                }}
                            />

                            <div className="clearfix text-end mt-3">
                            <Button variant="danger" href="/employee master">Submit</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
      <Dropzone
        {...props}
        onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            className={classNames("dropzone", "dz-clickable", {
              "dz-started": selectedFiles && selectedFiles.length > 0,
            })}
          >
            <div {...getRootProps()}>
              {/* <div className="dz-message needsclick">
                <input {...getInputProps()} />
                <i className="h1 text-muted uil-cloud-upload"></i>
                <h3>Drop files here or click to upload.</h3>
                <span className="text-muted ">
                  (This is a dropzone. Selected files will{" "} 
                  <strong>uploaded</strong> here.)
                </span>
              </div> */}
              {props.showPreview &&
                (selectedFiles || []).map((f, i) => {
                  return (
                    <React.Fragment key={i}>
                      {f.preview && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="dz-preview dz-processing dz-error dz-complete dz-image-preview"
                        >
                           
                          <div className="dz-image">
                            <img
                              key={i}
                              data-dz-thumbnail=""
                              alt={f.name}
                              src={f.preview}
                            />
                          </div>

                          <div className="dz-details">
                            <div className="dz-size">
                              <span data-dz-size="">
                                <strong>{f.formattedSize}</strong> KB
                              </span>
                            </div>
                            <div className="dz-filename">
                              <span data-dz-name="">{f.name}</span>
                            </div>
                          </div>

                          <div className="dz-remove">
                            <Button
                              variant=""
                              onClick={(e) => removeFile(e, i)}
                            >
                              <i className="uil uil-multiply"></i>
                            </Button>
                          </div>
                        </div>
                      )}
                      {!f.preview && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="dz-preview dz-file-preview dz-processing dz-error dz-complete"
                        >
                          <div className="dz-image">
                            <img data-dz-thumbnail="" alt="" />
                          </div>
                          <div className="dz-details">
                            <div className="dz-size">
                              <span data-dz-size="">
                                <strong>{f.formattedSize}</strong> KB
                              </span>
                            </div>
                            <div className="dz-filename">
                              <span data-dz-name="">{f.name}</span>
                            </div>
                          </div>

                          <div className="dz-remove">
                            <Button
                              variant=""
                              onClick={(e) => removeFile(e, i)}
                            >
                              <i className="uil uil-multiply"></i>
                            </Button>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        )}
      </Dropzone>
    </>
  );
};

export default UploadDocuments;
