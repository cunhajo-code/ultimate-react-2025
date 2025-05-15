function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const pctPackedItems = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {pctPackedItems === 100
          ? "Everything packed, ready go! 🛫"
          : `🛍️ You have ${numItems} items on your list, and you have already packed ${numPackedItems} (${pctPackedItems} %)`}
      </em>
    </footer>
  );
}

export default Stats;
