import PropTypes from 'prop-types';

export const ItemsFooter = ({ title, style, link1, seccion1, link2, seccion2, link3, seccion3 }) => {
  return (
    <section className=" md:text-start text-center">
    <h2 className=" pb-6 font-bold text-2xl cursor-default">{ title }</h2>
    <ul className="text-white">
        <li className={ style } >
            <a href={ link1 }> { seccion1 } </a>
        </li>
        <li className={ style } >
            <a href={ link2 }>{ seccion2 }</a>
        </li>
        <li className={ style } >
            <a href={ link3 }>{ seccion3 }</a>
        </li>
    </ul>  
</section> 
  )
}

ItemsFooter.propTypes = {
    style : PropTypes.string,
    title : PropTypes.string,
    link1 : PropTypes.string,
    link2 : PropTypes.string,
    link3 : PropTypes.string,
    seccion1 : PropTypes.string,
    seccion2 : PropTypes.string,
    seccion3 : PropTypes.string,
}