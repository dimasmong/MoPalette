/**
 * Explicit user-triggered file downloader
 * Only called in direct response to user click actions
 */
export function downloadFile(
  content: string | Blob,
  filename: string,
  mimeType: string = 'text/plain;charset=utf-8'
): void {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
