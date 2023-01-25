
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls} from '@react-three/drei';
import { EarthModel } from './EarthModel'
import Navbar from '../../components/Navbar'
import Content from '../../components/Content'
import styles from './earthPage.module.scss'

function EarthPage({dayLight}) {

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.section}>
      <div className={styles.preview}>
        <Canvas>
          <ambientLight intensity={0.08} />
          <pointLight position={[90, 90, 90]} />
          <EarthModel dayLight={dayLight}/>
          <PerspectiveCamera makeDefault position={[150, 150, 150]} />
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>
        <Content />
      </div>
    </div>
  );
}

export default EarthPage;