'use client';

import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { useState } from "react";

export const AlertForTesis = ({ text, title, type, color='green' }) => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(!showModal);

  return (
    <>
        <Button onClick={handleShowModal} variant="gradient" type="submit" color={color}>
            { type }
        </Button>
        <Dialog open={showModal} handler={handleShowModal}>
            <DialogHeader>{ title }</DialogHeader>
            <DialogBody>
               { text }
            </DialogBody>
            <DialogFooter>
            <Button variant="gradient" color={color} onClick={handleShowModal}>
                <span>Aceptar</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </>
  )
}
