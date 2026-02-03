/**
 * Rolling our own simple multipart/form-data generator to avoid extra dependencies.
 * (since n8n doesn't allow adding "external" dependencies to community nodes, like "form-data" (even though it's build into node))
* 
* Generates multipart/form-data body compatible with Moodle Web Services.
 */
export class SimpleFormData {
	private boundary: string;
	private parts: Buffer[] = [];

	constructor() {
		// Generate a random boundary string
		this.boundary = '----FormBoundary' + Math.random().toString(36).substring(2, 15);
	}

	/**
	 * Append a field to the form data
	 * @param key - The field name
	 * @param value - The field value (string, number, or boolean)
	 */
	append(key: string, value: string | number | boolean): void {
		const stringValue = String(value);
		let part = `--${this.boundary}\r\n`;
		part += `Content-Disposition: form-data; name="${key}"\r\n`;
		part += `\r\n`;
		part += `${stringValue}\r\n`;
		this.parts.push(Buffer.from(part, 'utf-8'));
	}

	/**
	 * Get the Content-Type header value with boundary
	 */
	getContentType(): string {
		return `multipart/form-data; boundary=${this.boundary}`;
	}

	/**
	 * Get the complete body as a Buffer
	 */
	getBody(): Buffer {
		const closing = Buffer.from(`--${this.boundary}--\r\n`, 'utf-8');
		return Buffer.concat([...this.parts, closing]);
	}

	/**
	 * Get the body as a string (for debugging)
	 */
	toString(): string {
		return this.getBody().toString('utf-8');
	}
}
