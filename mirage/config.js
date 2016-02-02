export default function() {
  this.get('/polls');
  this.get('/polls/:id');
  this.post('/polls');
  this.post('/options');
  this.post('/votes');
}
