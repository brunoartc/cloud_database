sudo apt -y update
sudo apt install npm openvpn
cd /home/ubuntu
git clone https://github.com/brunoartc/cloud_database
cd cloud_database
npm i 
tmux new -d -s todo 'npm start;' 