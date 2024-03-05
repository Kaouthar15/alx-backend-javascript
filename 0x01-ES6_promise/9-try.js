export default function guardrail(mathFunction) {
  const queue = [];
  let response;
  try {
    response = mathFunction();
  } catch (err) {
    response = `Error: ${err.message}`;
  }
  queue.push(
    response,
    'Guardrail was processed',
  );
  return queue;
}
