export function scrollToNextSection() {
  const nextSection = document.getElementById('next-section');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
