git pull && \
	bash pipeline.sh && \
	bash upload.sh && \
	git add -A && \
	git commit -m "Update" && \
	git push
