import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls} from '@react-three/drei';
import { HopperCar } from './HopperCar'
import styles from './machine.module.css'

function MachinePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.preview}>
        <Canvas>
          <ambientLight intensity={0.05} />
          <HopperCar isOpen={isOpen} />
          <PerspectiveCamera makeDefault position={[10, 10, 30]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className={styles.footer}>
        <label className={styles.switch}>
          <input
            type='checkbox'
            checked={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
}

export default MachinePage;
