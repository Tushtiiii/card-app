import '../App.css'
import Card from './Card';

const Cardcontainer = ({ data}) => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default Cardcontainer