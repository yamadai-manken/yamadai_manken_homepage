import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000)
  }, [])
    
  {isLoading ? 
    <div className={`${styles.fadeIn} ... `}>
      {/* Loading */}
    </div>
    : <div className={`${styles.fadeIn} ... `}>
      {/* After Loading */}
    </div>
  }
}
