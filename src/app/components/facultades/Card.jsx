'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { BsFacebook } from "react-icons/bs";

export const CardInfo = ({ image, description, title, link }) => {


  return (
        <>
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src={image}
          alt={title}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
            {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button> Ver mas... </Button>
      </CardFooter>
    </Card>
        </>
    )



}

Card.propTypes = {
    image : PropTypes.any,
    title : PropTypes.string,
    description : PropTypes.string,
    link : PropTypes.string,
}