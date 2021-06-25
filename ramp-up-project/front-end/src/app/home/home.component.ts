import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    selectedFile!: File;

    constructor(private http: HttpClient) { }

    onFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        this.http.post('http://localhost:3000/upload', fd)
            .subscribe(res => {
                console.log(res);
            })
    }
}