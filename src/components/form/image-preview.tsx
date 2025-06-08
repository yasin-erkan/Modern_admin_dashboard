'use client';

import React, {useEffect, useState} from 'react';
import Field from './field';
import Image from 'next/image';

type Props = {
  imageInputId: string;
};

const ImagePreview = ({imageInputId}: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Get the imageID of the input element
    const imageInput = document.getElementById(
      imageInputId,
    ) as HTMLInputElement;

    // Handle the change event of the input element
    const handleChange = () => {
      const newUrl = imageInput.value;
      setImageUrl(newUrl);

      if (newUrl) {
        const testImg = new globalThis.Image();

        testImg.onload = () => {
          setIsLoading(false);
          setIsValid(true);
        };

        testImg.onerror = () => {
          setIsLoading(false);
          setIsValid(false);
        };

        testImg.src = newUrl;
      } else {
        setIsLoading(false);
        setIsValid(false);
      }
    };

    if (imageInput) {
      imageInput.addEventListener('input', handleChange);
      handleChange();
    }
    return () => {
      if (imageInput) {
        imageInput.removeEventListener('input', handleChange);
      }
    };
  }, [imageInputId]);

  return (
    <Field htmlFor={imageInputId} label="image">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div>Image is loading</div>
        ) : isValid && imageUrl ? (
          <Image
            src={imageUrl}
            alt="Image Preview"
            fill
            className="object-contain"
            unoptimized
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            {imageUrl ? 'Invalid image URL' : 'No image available'}
          </div>
        )}
      </div>
    </Field>
  );
};

export default ImagePreview;
