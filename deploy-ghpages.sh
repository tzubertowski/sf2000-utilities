git checkout gh-pages
git merge main
cd tools
npm run build
cd ..
rm -rf docs
cp -r tools/dist docs