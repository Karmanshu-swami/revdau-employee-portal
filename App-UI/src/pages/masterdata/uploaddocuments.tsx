// Created by Saurabh on 30/09/2022
import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames";
import PageTitle from "../../components/PageTitle";
import FileUploader from "../../components/FileUploader";

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
            <h4 className="page-title mt-0 mb-1">Files Upload</h4>
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
                  console.log("Uploaded files - ", files);
                }}
              />

              <div className="clearfix text-end mt-3">
                <Button variant="danger" href="/employee master">
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UploadDocuments;
