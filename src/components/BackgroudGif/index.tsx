import gif from '../../assets/goal.gif';

interface BackgroudGifProps {
  nameClass: string;
}

function BackgroudGif() {
  return (
    <>
      <div>
        <img src={gif} alt="" />
      </div>
    </>
  );
}

export default BackgroudGif;
