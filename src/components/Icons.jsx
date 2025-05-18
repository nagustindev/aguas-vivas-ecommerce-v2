export function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
  );
}

export function AddToCartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export function RemoveFromCartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export function JellyfishIcon({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="#333"
        d="M19.5 14.5a.898.898 0 0 0-1 1c0 .67-1 .67-1 0v-2.3l1.7-.5c.72-.34 1.21-1.02 1.3-1.8C20.5 5.5 16.7 2 12 2s-8.5 3.5-8.5 8.9c.06.8.56 1.5 1.3 1.8l1.7.5v2.3a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.898.898 0 0 0-1-1a.898.898 0 0 0-1 1A2.394 2.394 0 0 0 6 18c1.41.06 2.56-1.09 2.5-2.5v-1.8h1v5.7c0 .67-1 .67-1 0a.898.898 0 0 0-1-1a.898.898 0 0 0-1 1A2.4 2.4 0 0 0 9 22c1.41.06 2.56-1.09 2.5-2.5V14h1v5.5A2.394 2.394 0 0 0 15 22c1.41.06 2.56-1.09 2.5-2.5c0-1.33-2-1.33-2 0c0 .67-1 .67-1 0v-5.7h1v1.8c0 1.36 1.13 2.46 2.5 2.4c1.41.06 2.56-1.09 2.5-2.5a.898.898 0 0 0-1-1m-8.9-9.8A5.57 5.57 0 0 0 7 7.3c-.17.2-.5.27-.7.1a.507.507 0 0 1-.1-.7a6.9 6.9 0 0 1 4.2-3c.27-.02.51.15.6.4c.06.27-.12.55-.4.6"
      />
    </svg>
  );
}
