// src/scripts/image-viewer.ts - Handle image expansion interactions

export function initImageViewer() {
  const viewer = document.getElementById('imageViewer');
  const viewerImg = document.getElementById('imageViewerImg') as HTMLImageElement;
  const closeBtn = document.getElementById('imageViewerClose');
  const overlay = document.querySelector('.image-viewer-overlay');

  if (!viewer || !viewerImg || !closeBtn || !overlay) {
    console.warn('ImageViewer elements not found');
    return;
  }

  let triggerElement: Element | null = null;

  // Find all images in project content and add click handlers
  const projectContent = document.querySelector('.project-content');
  if (projectContent) {
    const images = projectContent.querySelectorAll('img');

    images.forEach((img) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', (e) => openViewer(img));
    });
  }

  function openViewer(img: HTMLImageElement) {
    triggerElement = img;
    viewerImg.src = img.src;
    viewerImg.alt = img.alt || '';
    viewer.classList.add('active');
    viewer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button for keyboard navigation
    closeBtn.focus();
  }

  function closeViewer() {
    viewer.classList.remove('active');
    viewer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Return focus to the image that was clicked
    if (triggerElement instanceof HTMLElement) {
      triggerElement.focus();
    }
  }

  // Close button click
  closeBtn.addEventListener('click', closeViewer);

  // Overlay click
  overlay.addEventListener('click', closeViewer);

  // Image click (close viewer)
  viewerImg.addEventListener('click', (e) => {
    e.stopPropagation();
    closeViewer();
  });

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && viewer.classList.contains('active')) {
      closeViewer();
    }
  });

  // Prevent scroll while modal is open
  function preventScroll(e: WheelEvent | TouchEvent) {
    if (viewer.classList.contains('active')) {
      e.preventDefault();
    }
  }

  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initImageViewer);
} else {
  initImageViewer();
}
