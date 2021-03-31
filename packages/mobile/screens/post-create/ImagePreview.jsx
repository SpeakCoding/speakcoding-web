import React, { useCallback, useEffect, useRef, useState } from 'react';
import { convertToJPEGBase64 } from '@sc/tools/image';
import { Button, Header } from '@sc/ui/mobile';
import { FileUpload, Icon } from '@sc/ui';
import { useRouter } from '../../tools';
import s from './preview.css';

const ImagePreview = () => {
    const { route, navigate, goBack } = useRouter(),
        { open, image: initial } = route.params,
        [image, setImage] = useState(initial),
        $file = useRef();

    const handleChooseImage = useCallback(async files => {
        const jpeg = await convertToJPEGBase64(files[0]);
        setImage(jpeg);
    }, []);

    useEffect(() => {
        if (open) $file.current.click();
    }, [open]);

    return (
        <>
            <Header>
                <Header.Left onClick={goBack}>
                    <Icon name='m/arrow-left' size={24} />
                </Header.Left>
                <Header.Right onClick={() => navigate('post-form', { image })}>
                    <Button variant='text'>Next</Button>
                </Header.Right>
            </Header>

            {open && (
                <FileUpload accept='image/*' onChange={handleChooseImage}>
                    <input ref={$file} hidden type='button' />
                </FileUpload>
            )}

            <div className={s.box}>{image && <img src={image} alt='' className={s.img} />}</div>
        </>
    );
};

export default ImagePreview;
