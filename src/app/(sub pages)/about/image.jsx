import { Img } from 'react-three-fiber';

function Imagee() {
  return (
    <Img
      src="path_to_your_image.jpg"
      position={[0, 0, 0]} // Example position
      scale={[1, 1, 1]} // Example scale
    />
  );
}

export default Imagee;
