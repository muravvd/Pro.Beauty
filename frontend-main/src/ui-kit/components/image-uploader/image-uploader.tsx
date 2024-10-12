import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { isNil } from "ramda";

const filterEmptyImages = (item: string | undefined): item is string =>
  item !== undefined;

export function ImageUploader({ onChange }: any) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const handleOnChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    const data = imageList
      .map(({ dataURL }) => dataURL)
      .filter(filterEmptyImages)
      .at(0);
    onChange(data);
    setImages(imageList as never[]);
  };

  return (
    <div>
      <ImageUploading
        value={images}
        onChange={handleOnChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
