import { HoverDetails } from './Card';

function CardHoverDetails({ children }) {
  return (
    <HoverDetails>
      <div>{children}</div>
    </HoverDetails>
  );
}

export default CardHoverDetails;
