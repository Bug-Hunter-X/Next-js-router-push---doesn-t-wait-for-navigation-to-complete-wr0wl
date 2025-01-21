```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = async () => {
    const routeChangePromise = new Promise((resolve) => {
      const routeChangeComplete = () => {
        router.events.off('routeChangeComplete', routeChangeComplete);
        resolve();
      };
      router.events.on('routeChangeComplete', routeChangeComplete);
    });
    router.push('/another-page');
    await routeChangePromise;
    console.log('Navigation complete');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}

export default MyComponent;
```