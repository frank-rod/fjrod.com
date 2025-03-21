/**
 * Función para realizar scroll suave a un elemento por su ID
 * @param elementId - ID del elemento al que queremos hacer scroll
 * @param event - Evento opcional (para prevenir comportamiento por defecto)
 */
export const scrollToElement = (elementId: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault();
  }
  
  const element = document.getElementById(elementId);
  if (element) {
    // Pequeño offset para que no quede exactamente en el borde superior
    const headerHeight = 80; // Altura aproximada del header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    // Implementación personalizada de scroll suave más rápido
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 400; // Más rápido: 400ms en lugar de la duración por defecto de smooth
    let start: number | null = null;
    
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Función de aceleración (easeInOutQuad)
      const easing = percentage < 0.5 
        ? 2 * percentage * percentage 
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
      
      window.scrollTo(0, startPosition + distance * easing);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
  }
};

/**
 * Función para realizar un desplazamiento suave a un elemento específico
 * @param elementId El ID del elemento al que se desea desplazar (sin el #)
 * @param offset Un desplazamiento adicional en píxeles (útil para manejar encabezados fijos)
 */
export function smoothScrollTo(elementId: string, offset = 80): void {
  const targetElement = document.getElementById(elementId);
  
  if (targetElement) {
    const targetPosition = targetElement.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 400; // Más rápido: 400ms en lugar del comportamiento 'smooth' por defecto
    let start: number | null = null;
    
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Función de aceleración (easeInOutQuad)
      const easing = percentage < 0.5 
        ? 2 * percentage * percentage 
        : 1 - Math.pow(-2 * percentage + 2, 2) / 2;
      
      window.scrollTo(0, startPosition + distance * easing);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
  }
}

/**
 * Función auxiliar para manejar clics en enlaces y realizar desplazamiento suave
 * @param event El evento de clic
 * @param targetId El ID de destino (puede incluir # al inicio)
 * @param offset Un desplazamiento adicional en píxeles
 */
export function handleSmoothScrollClick(
  event: React.MouseEvent<HTMLAnchorElement>, 
  targetId: string, 
  offset = 80
): void {
  event.preventDefault();
  const id = targetId.replace('#', '');
  smoothScrollTo(id, offset);
} 