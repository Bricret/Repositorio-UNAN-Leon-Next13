'use client';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Link from 'next/link';

export const CardInfo = ({ image, description, title, link }) => {


  return (
        <>
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          sizes='h-56 w-full'
          className="rounded-t-lg object-cover "
          
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
        <Link 
          href={link}
          target="_blank"
          rel="noopener noreferrer">
          <Button> Ver mas... </Button>
        </Link>
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